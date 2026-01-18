import { createFileRoute } from '@tanstack/react-router';
import Players from '@/pages/Players';

export const Route = createFileRoute('/players')({
  component: Players,
});
