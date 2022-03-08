import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'a-table',
  styleUrl: 'a-table.css',
  shadow: true,
})
export class ATable {
  @Prop() columns: { field: string, header: string, sortable?: boolean }[];
  @Prop() data: any[] = [];

  render() {
    return (
      this.columns && <table>
        <thead>
          <tr>
            {this.columns.map(c => <th>{c.sortable ? <div><i class="gg-sort-az"></i></div> : '' } {c.header}</th>)}
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
