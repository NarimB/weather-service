export class Calendar {
  private allEvents: Record<string, { title: string; description?: string }[]> = {};

  add(date: string, title: string, description?: string) {
    if (!this.allEvents[date]) {
      this.allEvents[date] = [];
    }
    this.allEvents[date].push({ title, description });
  }

  update(date: string, index: number, title: string, description?: string) {
    if (this.allEvents[date] && this.allEvents[date][index]) {
      this.allEvents[date][index] = { title, description };
    }
  }

  delete(date: string, index: number) {
    if (this.allEvents[date]) {
      this.allEvents[date].splice(index, 1);
    }
  }

  get(date: string) {
    return this.allEvents[date] || [];
  }
}
