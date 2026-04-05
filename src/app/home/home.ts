import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { Features } from '../components/features/features';
import { Cards } from '../components/cards/cards';

type PricingCard = {
  planTag: string;
  title: string;
  price: string;
  priceSuffix: string;
  buttonLabel: string;
  benefits: string[];
};

@Component({
  selector: 'app-home',
  imports: [Header, Features, Cards, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  pricingCards: PricingCard[] = [
    {
      planTag: 'Starter Plan',
      title: 'ARCHITECT',
      price: 'FREE',
      priceSuffix: '/forever',
      buttonLabel: 'Get Started',
      benefits: [
        'Personal editorial editor',
        'Up to 3 project archives',
        'Basic tonal typography',
      ],
    },
    {
      planTag: 'Creator Plan',
      title: 'ATELIER',
      price: '$12',
      priceSuffix: '/month',
      buttonLabel: 'Start 7-Day Trial',
      benefits: [
        'Unlimited project archives',
        'Smart tags and advanced search',
        'Priority support and backups',
      ],
    },
    {
      planTag: 'Team Plan',
      title: 'COLLECTIVE',
      price: '$29',
      priceSuffix: '/month',
      buttonLabel: 'Contact Sales',
      benefits: [
        'Shared editorial workspaces',
        'Roles and access permissions',
        'Team knowledge timelines',
      ],
    },
  ];
}
