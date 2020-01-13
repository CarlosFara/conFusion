import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMsg: string;

  constructor(private dishService: DishService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getDishes()
      //(dishes) is the object coming when the promise resolve
      .subscribe((dishes) => this.dishes = dishes,
        errMsg => this.errMsg = <any>errMsg);
  }

  // onSelect(dish:Dish){
  //   this.selectedDish = dish;
  // }

}
