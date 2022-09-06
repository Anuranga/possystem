import { Component, OnInit } from '@angular/core';
import { TablesDataService } from './tablesData.service';
import swal from 'sweetalert2';
import {TileServiceService} from '../../../form/components/tile-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tiles-list',
  templateUrl: './tiles-list.component.html',
  styleUrls: ['./tiles-list.component.scss'],
  providers: [TablesDataService]
})


export class TilesListComponent implements OnInit {

  tableData: Array<any>;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  public errorOccured: boolean;

  constructor(private _tablesDataService: TablesDataService,
              private tileServiceService: TileServiceService,
              private router: Router) {

  }

  ngOnInit() {
    this.tileServiceService.getAllTile().subscribe(data => {
      this.tableData = data.data;
    }, (error) => {
      this.errorOccured = true;
    });
  }

  refreshTileList(){
    this.tileServiceService.getAllTile().subscribe(data => {
      this.tableData = data.data;
    }, (error) => {
      this.errorOccured = true;
    });
  }

  loadData() {
    this.tableData = this._tablesDataService.DATA;
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  openModal(modal) {
    modal.open();
  }

  closeModal(modal) {
    modal.close();
  }

  onClose() {
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
  }

  alertConfirm(id) {
    swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.tileServiceService.removeTile(id).subscribe(data => {
          if (data) {
            swal(
              'Deleted!',
              'Tile has been deleted.',
              'success'
            );
          } else {
            swal(
              'Not Deleted!',
              'Tile has not been deleted.',
              'error'
            );
          }
          this.refreshTileList();
        });
      }
    });
  }

  editTile(id){
    this.router.navigate(['pages/form/create/'+id]);
  }
}
