import { Component, OnInit } from '@angular/core';

interface Section {
  heading: string;
  body: string;
}

interface Article {
  heading: string;
  introduction: string;
  subsections: Section[];
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  article: Article = {
    heading: 'Article heading',
    introduction:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officia illum molestiae dolore dolor quis enim distinctio velit nemo, error esse ad, unde, vitae possimus voluptatem sequi. Ex, earum quasi.',
    subsections: [
      {
        heading: 'Subsection',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi eaque est quia adipisci? Fuga odit, magni eveniet impedit ad vel quidem under perspiciatis iste pariatur iure nobis incidunt! Odio, cumque?',
      },
      {
        heading: 'Another subsection',
        body: 'Asperiores saepe error odio delectus omnis sapiente voluptate facilis quos a dolore amet deserunt voluptates numquam vero quibusdam labore dolores quod laborum cum praesentium, expedita voluptatem sed molestiae? Ducimus, nisi!',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
