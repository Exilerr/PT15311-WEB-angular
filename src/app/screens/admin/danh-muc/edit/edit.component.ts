import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CategoryService} from 'src/app/services/category.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

 async ngOnInit(): void {
   await this.route.params.subscribe(params =>{
     this.cateId = params.id;
   });
   await this.cateService.findById(this.cateId).subscribe(data =>{
     this.editFrom.setValue({id: data.id,name: data.name});
   })
  }

}
