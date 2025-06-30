import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import { Search, X } from 'lucide-react';

// Libs
import { cn } from '@/lib/utils';

// Components
import { Input } from './ui/input';
import { Button } from './ui/button';

interface SearchBarMobileProps {
  isSearching: boolean;
  setIsSearching: (isSearching: boolean) => void;
}

export function SearchBarMobile({
  isSearching,
  setIsSearching,
}: SearchBarMobileProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const queryParams = searchParams.get('q') ?? '';

  const [query, setQuery] = useState(queryParams);

  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      if (query.trim()) {
        setQuery('');
      } else {
        setIsSearching(false);
      }
    }
  }

  function handleInputBlur() {
    if (!query.trim()) {
      setTimeout(() => {
        if (!query.trim()) {
          setIsSearching(false);
        }
      }, 150);
    }
  }

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (query.length > 0) {
      return router.push(`/?q=${query}`);
    }

    router.push('/');
  }

  useEffect(() => {
    if (isSearching && inputRef.current) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isSearching]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsSearching(false);
      }
    }

    if (isSearching) {
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isSearching, setIsSearching]);

  function handleClearSearch() {
    setIsSearching(false);
    inputRef.current?.blur();
  }

  function handleToggleSearch() {
    if (isSearching && !query.trim()) {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
  }

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSearch}
      className="flex items-center relative"
      layout
    >
      <AnimatePresence mode="wait">
        {(query?.length > 0 || isSearching) && (
          <motion.div
            initial={{ width: 0, opacity: 0, x: 20 }}
            animate={{ width: 200, opacity: 1, x: 0 }}
            exit={{ width: 0, opacity: 0, x: 20 }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
              width: { duration: 0.3 },
              opacity: { duration: 0.2 },
              x: { duration: 0.25 },
            }}
            className="overflow-hidden mr-1"
          >
            <Input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onBlur={handleInputBlur}
              onKeyDown={handleKeyDown}
              className={cn(
                'w-full transition-all duration-200',
                'focus-visible:ring-2 focus-visible:ring-primary/20',
                'border-muted-foreground/20 focus-visible:border-primary/40',
                'text-sm h-9'
              )}
              placeholder="Buscar..."
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center">
        <AnimatePresence>
          {isSearching && query.trim() && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 10 }}
              transition={{ duration: 0.2 }}
              className="mr-1"
            >
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={handleClearSearch}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          type={isSearching && query.trim() ? 'submit' : 'button'}
          variant="ghost"
          size="icon"
          onClick={handleToggleSearch}
          className={cn(
            'relative transition-all duration-300',
            isSearching
              ? 'text-primary hover:text-primary/80 scale-105'
              : 'hover:scale-105'
          )}
        >
          <motion.div
            animate={{
              rotate: isSearching ? 360 : 0,
              scale: isSearching ? 1.1 : 1,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
              rotate: { duration: 0.5 },
            }}
          >
            <Search className="h-4 w-4" />
          </motion.div>
        </Button>
      </div>
    </motion.form>
  );
}
