import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';
import {AlertService} from '../../services/alert.service';
import {Alert} from '../../models/alert';
import { NgForm } from '@angular/forms';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  

declare let M: any;
let hoy = new Date();
// declare let jspdf: any; 

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  providers: [AlertService]
})
export class AlertsComponent implements OnInit {

  

  constructor(public alertService: AlertService) { }
  // Get current date for status




  ngOnInit(): void {
    this.getAlerts();

  }




  

  createReport()  
  {  
    // get date to report genrate 
    let dd = hoy.getDate();
    let mm = hoy.getMonth()+1;
    let yyyy = hoy.getFullYear();

  
    let fulldate = dd + '/' + mm + '/' + yyyy ;
    let data = document.getElementById('Report')
    html2canvas(data).then(canvas => {  
      
      let imgWidth = 200;   
      let pageHeight = 295;    
      let imgHeight = canvas.height * imgWidth / canvas.width;  
      let heightLeft = imgHeight;  
      const contentDataURL = canvas.toDataURL('image/png')  
      const pdf = new jspdf('p', 'mm', 'a4'); 
      let position = 0;  
      pdf.addImage(contentDataURL, 'JPEG', 0, position, imgWidth, imgHeight)  
      pdf.save(fulldate +'-Report.pdf'); 
    });  
    //another way to convert to pdf
    // html2canvas(document.getElementById('a')).then(function(canvas) {
    //   var img = canvas.toDataURL("image/png");
    //   var doc = new jspdf();
    //   doc.addImage(img,'JPEG',0,5);
    //   doc.save('testCanvas.pdf');
    //   });

  }  

 

  addAlert(form: NgForm){
    if (form.value._id) {
      this.alertService.putAlert(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        M.toast({html: 'Updated Successfuly'})
        this.getAlerts();
      });
    }else{
      this.alertService.postAlert(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        M.toast({html: 'Saved Successfuly'})
        this.getAlerts();
      });
    }
   
  }

  getAlerts(){
    this.alertService.getAlerts()
    .subscribe(res =>{
      this.alertService.alerts = res as Alert[];
      console.log(res);
   
    })
  }
  editAlert(alert : Alert){
    this.alertService.selectedAlert = alert;
    // this.userService.putUser()
  }
  deleteAlert(_id:string){
    if (confirm('Are you sure you want to delete it?')) {
      this.alertService.deleteAlert(_id)
      .subscribe(res => {
        console.log(res);
        this.getAlerts();
        M.toast({html: 'Deleted successfuly'})
      });
     

    }

  }


  //clean form after submit
  resetForm(form?: NgForm){
    if (form) {
      form.reset();
      this.alertService.selectedAlert = new Alert();
    }
  }

}
