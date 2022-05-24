import { Component, OnInit } from '@angular/core';
import { StudentrecordsService } from '../services/studentrecords.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  students:any=[];
  years:any=[];
  attendesof_year:any=[];
  averageof_stdents:any;
  sum:number=0;
  constructor(private stdService:StudentrecordsService) { }

  ngOnInit(): void {
    this.fetchStudentsData();
    // this.sumOfAttendies();

  }
  fetchStudentsData(){
    this.stdService.fetcData().subscribe(
      (data:any)=>{
        this.students=data;
        this.noOfATTendies();
        this.noOfYears();
      },(error:any)=>{
        console.log('check errror..>',error);

      }
  )}
  //find out the years
  noOfYears(){
   this.years=this.students.filter((item:object)=>{
               this.students.every()

   })
  }
  //find out no of attendis
  noOfATTendies(){
    console.log('function called');
    for(let i=0;i<this.students.length;i++){
      for(let j=i+1;j<this.students.length;j++){
        if(this.students[i].StartYear==this.students[j].StartYear)
        this.attendesof_year.push(this.students[j])
      }
    }
    console.log('check no of attendies..>',this.attendesof_year);
  }

  //average of the atttendies
  sumOfAttendies(){
    for(let i=0;i<this.students.length;i++){
        for(let j=0;j<this.students[i].GPARecord.length;j++){
           this.sum+=this.students[i].GPARecord[j];
        }

   this.averageof_stdents=this.sum/4;

    }
      }
}
