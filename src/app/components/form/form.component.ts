import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() data: any;

  projectForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.prepareForm();
  }
  prepareForm() {
    const controls: any = {};
    this.data.fields.forEach((resp: any) => {
      const validationsArray = [];
      if (resp.isRequired) {
        validationsArray.push(Validators.required);
      }
      controls[resp.key] = new FormControl({value:resp.key,disabled:resp.isReadonly}, validationsArray)
    });
    this.projectForm = this.formBuilder.group(controls);
  }

  submit() {
    console.log(this.projectForm.value);
  }
}
