import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'

import kube_scratch from '../../../assets/images/kube-scratch.png'
import multi_region_eks from '../../../assets/images/multi-region-eks.png'
import web3_auction_api from '../../../assets/images/web3-auction-api.png'
import gen_algo_cli from '../../../assets/images/gen-algo-cli.png'
import gen_algo from '../../../assets/images/gen_algo.png'
import go_express from '../../../assets/images/go_express.png'
import watch_tower from '../../../assets/images/watch-tower.webp'
import kube_ci from '../../../assets/images/Kubernetes-CICD.png'
import kube_tf from '../../../assets/images/kubernetes-terraform.jpg'
import altschool from '../../../assets/images/altschool-cloud-projects.jpg'
import quickterms from '../../../assets/images/quickterms.png'
import spicy from '../../../assets/images/spicy soups 1.png'
import zombrary from '../../../assets/images/zombrary.png'
import wordle from '../../../assets/images/wordle 1.png'
import decaden from '../../../assets/images/decaden 1.png'
import calculator from '../../../assets/images/calculator.png'
import classes from "./ProjectCards.module.css"

export default function ProjectCards() {
  return (
    <div className={classes.ProjectCards}>
      <ProjectCard
        name="Kube-Scratch"
        img={kube_scratch}
        desc="A lean IaC approach to deploying a k3s kubernetes cluster on AWS"
        tech={['Terraform', 'Github Actions', 'Helm', 'AWS', 'k3s', 'Golang']}
        links={[null, "https://github.com/de-marauder/kube-scratch"]} />

      <ProjectCard
        name="Multi-Region-EKS"
        img={multi_region_eks}
        desc="A project demonstrating how to create a multi-region kubernetes cluster deployment."
        tech={['Terragrunt', 'ArgoCD', 'Helm', 'AWS', 'EKS']}
        links={[null, "https://github.com/de-marauder/multi-region-eks"]} />
      
      <ProjectCard
        name="Web3 Auction API"
        img={web3_auction_api}
        desc="A simple API for auctions on the ethereum blockchain."
        tech={['nestJs', 'web3Js', 'mongodb', 'jest', 'super-test']}
        links={[null, "https://github.com/de-marauder/web3-auction-api"]} />

      <ProjectCard
        name="Go-Express"
        img={go_express}
        desc="An HTTP socket server written from scratch on TCP in the expressJs style."
        tech={['golang']}
        links={[null, "https://github.com/de-marauder/go-express"]} />

      <ProjectCard
        name="Gen-Algo Webui"
        img={gen_algo}
        desc="A simple webui for interacting with a genetic algorithm to optimize hydrogen production from flare gas."
        tech={['TypeScript', 'NextJs', 'tailwind']}
        links={["https://gen-algo-webui.vercel.app", "https://github.com/de-marauder/gen-algo-webui"]} />

      <ProjectCard
        name="Gen-Algo API"
        img={gen_algo}
        desc="A REST API for interacting with a genetic algorithm to optimize hydrogen production from flare gas."
        tech={['TypeScript', 'NodeJs', 'ExpressJs']}
        links={[null, "https://github.com/de-marauder/gen-algo-api"]} />
      
      <ProjectCard
        name="Gen-Algo CLI"
        img={gen_algo_cli}
        desc="An NPM CLI for interacting with a genetic algorithm to optimize hydrogen production from flare gas."
        tech={['TypeScript', 'NodeJs', 'ExpressJs']}
        links={["https://www.npmjs.com/package/@de-marauder/gen-algo", "https://github.com/de-marauder/genetics_algorithm"]} />

      <ProjectCard
        name="Watch-tower"
        img={watch_tower}
        desc="A complete application deployment using terraform with prometheus monitoring stack"
        tech={['AWS', 'Route53', 'Terraform', 'Ansible', 'linux', 'Prometheus', 'Grafana', 'Loki']}
        links={[null, "https://github.com/de-marauder/Altschool-Capstone-Project"]} />

      <ProjectCard
        name="Kubernetes CI-CD"
        img={kube_ci}
        desc="CI-CD with Kubernetes from scratch on terraform"
        tech={['Kubernetes', 'Helm', 'Terraform', 'bash', 'linux', 'k8s']}
        links={[null, "https://github.com/de-marauder/kubernetes-terraform-CI-CD"]} />

      <ProjectCard
        name="Kubernetes + terraform"
        img={kube_tf}
        desc="Kubernetes Cluster from scratch on terraform"
        tech={['Kubernetes', 'Helm', 'Terraform', 'bash', 'linux']}
        links={[null, "https://github.com/de-marauder/kubernetes-tf-aws"]} />

      <ProjectCard
        name="AltSchool"
        img={altschool}
        desc="A repo of my cloud projects while in AltSchool"
        tech={['AWS', 'GCP', 'CI/CD', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'Ansible', 'bash', 'linux']}
        links={[null, "https://github.com/de-marauder/altschool-cloud-exercises"]} />

      <ProjectCard
        name="QuickTerms"
        img={quickterms}
        desc="A Terms & Conditions and Privacy Policy Generator."
        tech={['Django', 'Javascript', 'Bootstrap5']}
        links={["https://quickterms.onrender.com", "https://github.com/zuri-training/Proj-T_C_Gen-Team-74"]} />

      <ProjectCard
        name="Spicy soups"
        img={spicy}
        desc="An Online Restaurant for Ordering Local Cuisine."
        tech={['React', 'Redux', 'Tailwindcss', 'React-router-dom', 'stripe API']}
        links={["https://spicy-soups.vercel.app", "https://github.com/de-marauder/spicy_soups"]} />

      <ProjectCard
        name="Zombrary"
        img={zombrary}
        desc="Never forget a book again. Add the author and add the book. Find it anytime."
        tech={['NodeJs', 'ExpressJs', 'EJS', 'CSS3', 'HTML5']}
        links={["https://zombrary.onrender.com/", "https://github.com/de-marauder/zombrary"]} />

      <ProjectCard
        name="Wordle clone"
        img={wordle}
        desc="A game where the player tries to guess a word in 6 tries. Can you guess the word?"
        tech={['React', 'CSS3', 'JavaScript', 'HTML5']}
        links={["https://de-marauder.github.io/wordle/", "https://github.com/de-marauder/wordle"]} />

      <ProjectCard
        name="Decaden"
        img={decaden}
        desc="A landing page offered to a client to boost their online presence"
        tech={['React', 'CSS3', 'React-router-dom', 'HTML5']}
        links={["https://de-marauder.github.io/decaden/", "https://github.com/de-marauder/decaden"]} />

      <ProjectCard
        name="Simple Calculator"
        img={calculator}
        desc="A simple calculator. performs basic arithmetic operations."
        tech={['React', 'CSS3', 'HTML5']}
        links={["https://de-marauder.github.io/Calculator/", "https://github.com/de-marauder/calculator"]} />

      <div style={{ height: '20px', width: '100%' }}></div>
    </div>
  )
}
