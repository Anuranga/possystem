import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormArray} from '@angular/forms';
import {TileServiceService} from '../../../form/components/tile-service.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  orderForm = new FormGroup({
    /*itemCode: new FormControl(''),
    shade: new FormControl(''),
    size: new FormControl(''),
    type: new FormControl(''),
    company: new FormControl(''),
    quantity: new FormControl(''),
    cost: new FormControl(''),
    sellingPrice: new FormControl(''),*/
  });
  form: FormGroup;
  id = '';

  constructor(private tileServiceService: TileServiceService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.form = new FormGroup({
      customer: new FormGroup({
        customerName: new FormControl(''),
        address: new FormControl(''),
        number: new FormControl(''),
        remarks: new FormControl('')
      }),
      item: new FormArray([
        new FormGroup({
          itemCode: new FormControl(''),
          quantity: new FormControl(''),
          discount: new FormControl('')
        })
      ])
    });
    this.route.params.subscribe((param : Params) => {
      this.id = param['id'];
      if(this.id != undefined){
       // this.getTile();
      }
    }, (error) => {
      console.log(error)
    });
  }

  get item(): FormArray {
    return this.form.get('item') as FormArray;
  }

  addTile() {
    this.item.push(
      new FormGroup({
        itemCode: new FormControl(''),
        quantity: new FormControl(''),
        discount: new FormControl('')
      })
    );
  }

  createTileOrder() {
    if(this.id){
      //this.editTile();
    } else {
      const orderFormValues = this.orderForm.value;
      const createTile = this.tileServiceService.addTile(orderFormValues).subscribe(data => {
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

  /*editTile() {
    const orderFormValues = this.orderForm.value;
    const createTile = this.tileServiceService.editTile(this.id, orderFormValues).subscribe(data => {
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
  }*/

  /*getTile() {
    const orderFormValues = this.orderForm.value;
    const createTile = this.tileServiceService.getTile(this.id).subscribe(data => {
     /!* this.orderForm.setValue({
        itemCode : data.data.item_code,
        shade: data.data.shade,
        size: data.data.Size,
        type: data.data.type,
        company: data.data.company_id,
        quantity: data.data.qty,
        cost: data.data.cost,
        sellingPrice: data.data.selling_price,
      });*!/
    }, error => {
      swal({
        type: 'error',
        title: 'Error!',
        text: 'Failed to load tile',
      });
    });
  }*/

  loadTile(){
    this.router.navigate(['pages/table/tile-list']);
  }

}
