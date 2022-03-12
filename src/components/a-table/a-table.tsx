import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'a-table',
  styleUrl: 'a-table.css',
  shadow: true,
})
export class ATable {
  @State() order;
  @Prop() columns: { field: string, header: string, sortable?: boolean, width: number }[];
  @Prop() data: any[] = [];

  getSortIcon(order: string): any {
    if (order === 'asc') {
      return <i class="gg-chevron-down"></i>
    }

    if (order === 'desc') {
      return <i class="gg-chevron-up"></i>
    }

    return <i class="gg-arrows-exchange"></i>
  }

  sort(field: string): void {
    const arr = [...this.data];
    this.data = arr.sort((a, b) => this.order === 'asc' ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
    this.order = this.order === 'asc' ? 'desc' : 'asc'
  }

  render() {
    return (
      this.columns && <table>
        <thead>
          <tr>
            {this.columns.map(c =>
              <th style={c.width ? { width: `${c.width}px` } : {}} onClick={() => this.sort(c.field)} class={{ pointer: c.sortable }}>
                <div>{c.sortable ? this.getSortIcon(this.order) : ''} {c.header}</div>
              </th>)}
          </tr>
        </thead>
        <tbody>
          {this.data.map(record => <tr>
            {this.columns.map(col => <td>{record[col.field]}</td>)}
          </tr>)}
        </tbody>
      </table>
    );
  }

}
