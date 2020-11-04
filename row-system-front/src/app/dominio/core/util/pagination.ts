export abstract class Pagination {

  key = 'nome';
  reverse: boolean = false;


     // Metodo para ordernar coluna
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  // Metodo de estilo da ordenação
  sortClass(key: string) {
    let sort = this.key == key && this.reverse ? 'sort-up' : 'sort-down';
    let active = this.key == key ? 'active' : '';
    return `${sort} ${active}`;
  }
}