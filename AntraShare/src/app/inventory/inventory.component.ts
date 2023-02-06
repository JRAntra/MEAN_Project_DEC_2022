import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit{

  constructor(private router : Router,
    private ar : ActivatedRoute
    ){}

  ngOnInit(): void {
    // console.log("the component has been initialized")
    // this.ar.paramMap.subscribe(
    //   res=> {
    //     console.log('new async id: ' + res.get("id"))
    //     //this.http.get(url+res)
    //   }
    // )
    // console.log("snapshot id: " + this.ar.snapshot.paramMap.get('id'))


    this.ar.queryParamMap.subscribe(
      res=> console.log(res)
    )
  }

  goToNextProduct(){
    let nextProduct = 124

    this.router.navigate(["inventory/" + nextProduct + "/asd"],
    {
      queryParams:{
        mode:"dark",
        preference:"from high to low"
      }
  })
  }
}
