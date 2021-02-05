import { useUserQuery } from '../types/generated-queries';

export function useUser() {
  const { data } = useUserQuery();

  return data?.authenticatedItem;
}
