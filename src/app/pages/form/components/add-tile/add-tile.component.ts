import {Component, Input, OnInit} from '@angular/core';
import {TileServiceService} from '../tile-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import swal from 'sweetalert2';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-add-tile',
  templateUrl: './add-tile.component.html',
  styleUrls: ['./add-tile.component.scss']
})
export class AddTileComponent implements OnInit {

  tileForm = new FormGroup({
    itemCode: new FormControl(''),
    shade: new FormControl(''),
    size: new FormControl(''),
    type: new FormControl(''),
    company: new FormControl(''),
    quantity: new FormControl(''),
    cost: new FormControl(''),
    sellingPrice: new FormControl(''),
  });
  id = '';

  constructor(private tileServiceService: TileServiceService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe((param : Params) => {
      this.id = param['id'];
      if(this.id != undefined){
        this.getTile();
      }
    }, (error) => {
      console.log(error)
    });
  }

  addTile() {
    if(this.id){
      this.editTile();
    } else {
      const tileFormValues = this.tileForm.value;
      const createTile = this.tileServiceService.addTile(tileFormValues).subscribe(data => {
        swal({
          type: 'success',
          title: 'Success!',
          text: data.data.message,
        });
        this.router.navigate(['pages/table/tile-list']);
      }, error => {
        swal({
          type: 'error',
          title: 'Error!',
          text: 'Failed to add this tile',
        });
      });
    }

  }

  editTile() {
    const tileFormValues = this.tileForm.value;
    const createTile = this.tileServiceService.editTile(this.id, tileFormValues).subscribe(data => {
      swal({
        type: 'success',
        title: 'Success!',
      });
      this.router.navigate(['pages/table/tile-list']);
    }, error => {
      swal({
        type: 'error',
        title: 'Error!',
        text: 'Failed to add this tile',
      });
    });
  }

  getTile() {
    const tileFormValues = this.tileForm.value;
    const createTile = this.tileServiceService.getTile(this.id).subscribe(data => {
      this.tileForm.setValue({
        itemCode : data.data.item_code,
        shade: data.data.shade,
        size: data.data.Size,
        type: data.data.type,
        company: data.data.company_id,
        quantity: data.data.qty,
        cost: data.data.cost,
        sellingPrice: data.data.selling_price,
      });
      }, error => {
      swal({
        type: 'error',
        title: 'Error!',
        text: 'Failed to load tile',
      });
      });
  }

  loadTile(){
    this.router.navigate(['pages/table/tile-list']);
  }

}
