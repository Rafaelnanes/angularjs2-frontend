import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'shd-input-date',
  templateUrl: './input-date.component.html',
  styles: []
})
export class InputDateComponent implements OnInit {

  @Output()
  public modelValue: EventEmitter<Date> = new EventEmitter<Date>();

  @Input()
  public readonly: boolean;

  public dateModel: string;
  public date: Date;
  public isShowDatePicker: boolean;
  public mask = [/[0-3]/, /[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /[1-2]/, /\d/, /\d/, /\d/];

  constructor() {

  }

  ngOnInit() {
    this.date = new Date();
  }

  public changeVisibleDatePicker(bool:boolean): void {
    setTimeout(() => {
      this.isShowDatePicker = bool && !this.readonly;
    }, 100);
  }

  public onChangeDate(event: Date): void {
    this.date = event;
    this.dateModel = this.formatDate(this.date);
    this.isShowDatePicker = false;
    this.modelValue.emit(this.date);
  }

  private formatDate(date: Date): string {
    return new DatePipe('pt-BR').transform(date, 'dd/MM/yyyy');
  }

  public onChangeModel(value: string): void {
    let str: any = value;
    if (str != null) {
      str = str.split('/');
      this.date = new Date(str[2], str[1] - 1, str[0]);
    }
    this.dateModel = value;
    this.modelValue.emit(this.date);
  }

}
