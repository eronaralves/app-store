'use client';

import { useState, type FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';

// Components
import { Input } from './ui/input';
import { Button } from './ui/button';

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const queryParams = searchParams.get('q') ?? '';

  const [query, setQuery] = useState(queryParams);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (query.length > 0) {
      return router.push(`/?q=${query}`);
    }

    router.push('/');
  }

  return (
    <div className="flex w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="flex-1 flex">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar produtos, marcas e muito mais..."
          className="rounded-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />

        <Button className="rounded-l-none cursor-pointer">
          <Search className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
