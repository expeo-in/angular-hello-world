import { Component, OnInit } from '@angular/core';

interface LikeIncrementArgs {
  count: number;
  type: string;
}

@Component({
  selector: 'app-building-blocks',
  templateUrl: './building-blocks.component.html',
  styleUrls: ['./building-blocks.component.scss'],
})
export class BuildingBlocksComponent {
  title = 'Angular-Hello-World';
  email = 'ganesh@gmail.com';
  mergeCells = 2;
  imageUrl =
    'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
  flag = true;
  mobile: string = '123';
  amount: number = 342546.12345;
  today = new Date();
  detail = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores exercitationem accusamus et enim labore fuga, quasi voluptate nam necessitatibus, nihil autem quos vero quod aliquam sit ad corrupti quo reiciendis dignissimos inventore ullam incidunt earum minus! Minima quo nam eligendi eos aperiam autem est odit accusantium explicabo asperiores animi saepe delectus eum assumenda cupiditate, ipsam necessitatibus neque corporis mollitia culpa beatae, dolor qui minus! Illum vero eligendi, voluptate cupiditate possimus dolore magnam cum quam dicta enim corporis incidunt quas totam, beatae sit. Impedit delectus hic, deleniti nisi minima ab unde! Maiores, pariatur inventore? Rem, cupiditate in! Minus similique rerum soluta exercitationem, fuga dolorem corrupti, perferendis natus aut enim eaque asperiores.`;

  //itemClasses = 'class-1 class-2';
  itemClasses = { class1: true, class2: false, class3: true };
  //itemClasses = ['class1'];

  itemStyles = 'background-color: pink; color: white; font-size: 50px';
  //itemStyles = { backgroundColor: 'pink', color: 'white', fontSize: '50px' };
  fname: string = 'ganesh';

  likeCount = 150;

  courses: string[] = ['Angular', 'React'];

  getDate() {
    //this.itemClasses.push('class2');
    return new Date().toDateString();
  }

  getStyles() {
    if (this.flag)
      return { backgroundColor: 'pink', color: 'white', fontSize: '50px' };
    else return { backgroundColor: 'orange', fontSize: '50px' };
  }

  showMessage($event: any) {
    console.log('button clicked', $event);
  }

  showInput(e: any) {
    console.log('enter pressed', e.target.value);
  }

  onKeyupPressed(e: KeyboardEvent) {}

  logName(value: string) {
    this.fname = value;
    //this.title = value;
    console.log(this.fname);
  }

  onEmailChanged(e: any) {
    this.email = e.target.value;
  }

  submitForm() {
    console.log('email', this.email);
    console.log('mobile', this.mobile);
  }

  // onLiked(e: { count: number }) {
  //   console.log(e);
  //   console.log('total likes - ' + e.count);
  // }

  onLiked(e: LikeIncrementArgs) {
    console.log(e);
    console.log('total likes - ' + e.count, e.type);
  }

  onDisliked(args: LikeIncrementArgs) {
    alert('user disliked' + args.count);
  }
}
