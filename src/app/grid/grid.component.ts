import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }
  public data: Object[];
  public filterSettings: Object;
  ngOnInit() {
    this.filterSettings = { type: 'Name' };
    this.data = [
      { Name: 'Raj', Email: 'Raj@gmail.com', MobileNo: 9937229856, Age: 30 },
      { Name: 'Roja', Email: 'Roja@gmail.com', MobileNo: 9937229857, Age: 31 },
      { Name: 'Kal', Email: 'Kal@gmail.com', MobileNo: 9937229858, Age: 32 },
      { Name: 'Sunny', Email: 'Sunny@gmail.com', MobileNo: 9937229859, Age: 33 },
      { Name: 'Merchant', Email: 'Merchant@gmail.com', MobileNo: 9937229850, Age: 34 },
      { Name: 'looks', Email: 'Raj@gmail.com', MobileNo: 9937229816, Age: 35 },
      { Name: 'Sunil', Email: 'sunil@gmail.com', MobileNo: 9937229826, Age: 36 },
      { Name: 'Jayanta', Email: 'jaya@gmail.com', MobileNo: 9937229836, Age: 37 },
      { Name: 'rahul', Email: 'rahul@gmail.com', MobileNo: 9937229856, Age: 38 },
      { Name: 'sumi', Email: 'sumi@gmail.com', MobileNo: 9937229846, Age: 39 },
      { Name: 'koyala', Email: 'koyala@gmail.com', MobileNo: 9937229856, Age: 40 },
      { Name: 'saharukh', Email: 'srkh@gmail.com', MobileNo: 9937229856, Age: 41 },
      { Name: 'test', Email: 'test@gmail.com', MobileNo: 9937229866, Age: 42 },
      { Name: 'ruups', Email: 'ruups@gmail.com', MobileNo: 9937229856, Age: 43 },
      { Name: 'soya', Email: 'soya@gmail.com', MobileNo: 9937229876, Age: 44 },
      { Name: 'naveen', Email: 'naveen@gmail.com', MobileNo: 9937229856, Age: 45 },
      { Name: 'nadda', Email: 'nadda@gmail.com', MobileNo: 9937229886, Age: 46 },
      { Name: 'aryan', Email: 'aryan@gmail.com', MobileNo: 9937229896, Age: 47 }
    ];
  }

}
