import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Datas } from 'src/app/models/datas';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgModule, TemplateRef } from '@angular/core';





@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: Datas[] = [];
  
  url: string = environment.home.get;
  form: any;
  modalRef?: BsModalRef;
  close: any;

  constructor(public request: RequestService,
    public fb: FormBuilder,
    public modalService: BsModalService
  ) {
    

  }
  

  ngOnInit(): void {
    this.getData();
    this.form = this.fb.group({
      first_name: ['', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern(/^[A-Z]{1}[a-z]{1,}$/)])],
      last_name: ['', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern(/^[A-Z]{1}[a-z]{1,}$/)])],
      age: ['', Validators.compose([Validators.min(10), Validators.max(90)])],
      email: ['', Validators.compose(
        [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)])],
      country: ['', Validators.compose([Validators.required,Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[A-Z]{1}[a-z]{1,}$/)])],
      city: ['', Validators.compose([Validators.required,Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[A-Z]{1}[a-z]{1,}[\- ]$/)])],
      address: ['', Validators.compose(
        [Validators.required, Validators.pattern(/^[A-za-z 0-9\,\-+\_.]{1,}$/)])],
      gender: ''
     
    });
  }
  getData() {
    this.request.getData(this.url).subscribe((res: any) => {
      this.data = res;


    })
    console.log(this.data);

  }

  create() {

   
    let value = this.form.value;
    this.request.postData(this.form.value, value).subscribe((res: any) => {
      console.log(res);
    this.getData()


    })
    

  }
  save(){
   let val= this.form.value;
    this.request.postData(this.url, val).subscribe((res: any) => {
      console.log(res);
     this.form.value=""

    })
   

  }
  
  deleteData(id:number){
  
    this.request.deleteData(`${this.url}/`+id).subscribe((res: any) => {
      console.log(res);
  this.getData()

  })
  

}

putData(id:number){
  let value:any={
    first_name: " ",
      last_name: "",
      age: Number,
      email: "",
      country: "",
      city: "",
      address: "",
      gender: "",
     
  }
  this.request.putData(`${this.url}/`+id, value).subscribe((res) => {
    console.log(res);

  })
}
openModal(mod: TemplateRef<any>) {
  this.modalRef = this.modalService.show(mod);
  this.save();
  
}
hide(mod:TemplateRef<any>){
  if (!this.modalRef) {
    return;
  }
}
// editPut(id:number){
//   let value:any={
//         first_name: " ",
//           last_name: "",
//           age: Number,
//           email: "",
//           country: "",
//           city: "",
//           address: "",
//           gender: "",
         
//       }
//   this.request.putData(`${this.url}/`+id, value).subscribe((res) => {
//         console.log(res);
    
//       })




}

// openEditModal(mod: TemplateRef<any>) {
//   this.modalRef = this.modalService.show(mod);
//   this.putData();
// }

// setVal(){
//   this.form.setValue({
//     first_name: 'Ann',
//     last_name: 'Smith',
//     email: '',
//     password: '',
//     confirm_password: '',
//     birthday: '',
//     phone: '',
//     address: '',
//     image: ''
//   })
// }

