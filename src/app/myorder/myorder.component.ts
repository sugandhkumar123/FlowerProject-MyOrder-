import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import { IOrderDetails } from '../Models/IOrderDetails';
import { FlowerService } from '../Services/flower.service';


@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {

  orderdetails:IOrderDetails[]=[];
  constructor(private _flowerService:FlowerService){  }

  // ngOnInit(){
  //   this.orderdetails=this._flowerService.getOrderDetails();
  // }
  
  ngOnInit(){
    this._flowerService.getOrderDetails().subscribe(data=>this.orderdetails=data);
  }

  downloadPDf(Oid:number,Fid:number,Tprice:number,remark:string,paystatus:string){
    const doc=new jsPDF();
    var temp="Bill:-"+"\n"+"\n"+"Order Number: "+Oid.toString()+"\n"+"Flower Id: "+Fid.toString()+"\n"+"Total Price: "+Tprice.toString()+"\n"+"Remark: "+remark+"\n"+"Payment Status: "+paystatus;
    doc.text(temp,10,10);
    doc.save("bill.pdf");
  }

}
