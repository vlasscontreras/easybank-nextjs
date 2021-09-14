interface ReadRepository<T> {
  all(filters?: Record<string, string>): Promise<T[]>;
  find(id: string): Promise<T | undefined>;
}

export default ReadRepository;
