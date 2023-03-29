"use strict";(self.webpackChunkproway_computers=self.webpackChunkproway_computers||[]).push([[769],{1769:(v,p,r)=>{r.r(p),r.d(p,{ProdutosModule:()=>h});var u=r(6895),s=r(9541),t=r(1571);const _=[{id:1,descricao:"Mouse gamer",preco:439,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-3.jpg",quantidadeEstoque:10},{id:2,descricao:"Monitor muito bom",preco:1200.5,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/monitor-1.jpg",quantidadeEstoque:15},{id:3,descricao:"Teclado excelente",preco:749.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/teclado-1.jpg",quantidadeEstoque:17},{id:4,descricao:"Fone para quem joga FPS",preco:599.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-2.jpg",quantidadeEstoque:50},{id:5,descricao:"Fone de ouvido",preco:299.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-1.jpg",quantidadeEstoque:5},{id:6,descricao:"Fone de ouvido bom",preco:399.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-3.jpg",quantidadeEstoque:15},{id:7,descricao:"HD 1TB",preco:499.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/hd.jpg",quantidadeEstoque:20},{id:8,descricao:"Combo de placa de v\xeddeos",preco:18449.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/placa-video.jpg",quantidadeEstoque:54},{id:9,descricao:"Processador Ryzen",preco:1e3,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/processador.jpg",quantidadeEstoque:10},{id:10,descricao:"Notebook bom",preco:2500,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/laptop-1.jpg",quantidadeEstoque:8},{id:11,descricao:"Notebook excelente",preco:4500,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/laptop-2.jpg",quantidadeEstoque:14},{id:12,descricao:"Mouse barato",preco:20,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-1.png",quantidadeEstoque:11},{id:13,descricao:"Mouse \xf3timo",preco:200,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-2.jpg",quantidadeEstoque:10},{id:14,descricao:"Mouse pequeno",preco:50,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-4.jpg",quantidadeEstoque:15},{id:15,descricao:"Teclado bom",preco:159.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/teclado-2.jpg",quantidadeEstoque:5}];let g=(()=>{class o{constructor(){this.produtos=_}getAll(){return this.produtos}getOne(n){return console.log("service: "+n),this.produtos.find(e=>e.id===n)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var l=r(8881);let P=(()=>{class o{constructor(n){this.snackNBar=n}notificar(n){this.snackNBar.open(n,"OK",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(l.ux))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var C=r(5087),i=r(433);let m=(()=>{class o{constructor(n,e,a,d){this.produtosService=n,this.route=e,this.notificacaoService=a,this.carrinhoService=d,this.quantidade=1}ngOnInit(){const e=Number(this.route.snapshot.paramMap.get("id"));this.produto=this.produtosService.getOne(e),console.log(this.produto?.id)}adicionarAoCarrinho(){this.notificacaoService.notificar("O produto foi adicionado ao carrinho!");const n={...this.produto,quantidade:this.quantidade};this.carrinhoService.adicionarAoCarrinho(n)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(g),t.Y36(s.gz),t.Y36(P),t.Y36(C.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-detalhes-produto"]],decls:19,vars:8,consts:[[1,"product__container"],[1,"product-image__container"],[3,"src"],[1,"product-description__container"],[1,"product__name"],[1,"product__price"],["type","number","min","1",3,"ngModel","ngModelChange"],[1,"product__avaiability"],[3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"section",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"h2",4),t._uU(5),t.qZA(),t.TgZ(6,"h3",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"p"),t._uU(10,"Estoque Dispon\xedvel"),t.qZA(),t.TgZ(11,"label"),t._uU(12," Quantidade: "),t.TgZ(13,"input",6),t.NdJ("ngModelChange",function(d){return e.quantidade=d}),t.qZA(),t._uU(14," unidade (s) "),t.qZA(),t.TgZ(15,"p",7),t._uU(16),t.qZA(),t.TgZ(17,"button",8),t.NdJ("click",function(){return e.adicionarAoCarrinho()}),t._uU(18,"Adicionar ao carrinho"),t.qZA()()()),2&n&&(t.xp6(2),t.Q6J("src",null==e.produto?null:e.produto.imagem,t.LSH),t.xp6(3),t.Oqu(null==e.produto?null:e.produto.descricao),t.xp6(2),t.Oqu(t.xi3(8,5,null==e.produto?null:e.produto.preco,"BRL")),t.xp6(6),t.Q6J("ngModel",e.quantidade),t.xp6(3),t.hij(" ",null==e.produto?null:e.produto.quantidadeEstoque," unidade(s) em estoque "))},dependencies:[i.Fj,i.wV,i.JJ,i.qQ,i.On,u.H9],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px 0}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0}.product-description__container[_ngcontent-%COMP%]{border:1px solid lightgray;border-radius:8px;padding:15px;flex:1}.product__avaiability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}button[_ngcontent-%COMP%]{background-color:#00f;border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}"]}),o})();function M(o,c){if(1&o&&(t.TgZ(0,"div",2)(1,"a",3),t._UZ(2,"img",4),t.TgZ(3,"h2",5),t._uU(4),t.qZA(),t.TgZ(5,"p",6),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"p",7),t._uU(9),t.qZA(),t.TgZ(10,"button",8),t._uU(11,"Comprar"),t.qZA()()()),2&o){const n=c.$implicit;t.xp6(1),t.MGl("routerLink","/produtos/",n.id,""),t.xp6(1),t.Q6J("src",n.imagem,t.LSH),t.xp6(2),t.hij(" ",n.descricao," "),t.xp6(2),t.hij(" ",t.xi3(7,5,n.preco,"BRL")," "),t.xp6(3),t.hij(" ",n.descricaoPreco," ")}}const O=[{path:"",component:(()=>{class o{constructor(n,e){this.produtosService=n,this.route=e}ngOnInit(){const n=this.produtosService.getAll();this.route.queryParamMap.subscribe(e=>{const a=e.get("descricao")?.toLocaleLowerCase();this.produtos=a?n.filter(d=>d.descricao.toLowerCase().includes(a)):n})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(g),t.Y36(s.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-produtos"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link",3,"routerLink"],[3,"src"],[1,"product-item__name"],[1,"product-item__price"],[1,"product-item__price-description"],["type","button",1,"product-item__buy-button"]],template:function(n,e){1&n&&(t.TgZ(0,"section",0),t.YNc(1,M,12,8,"div",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",e.produtos))},dependencies:[u.sg,s.rH,u.H9],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{display:block}.product-list[_ngcontent-%COMP%]{padding:40px 0;width:-moz-fit-content;width:fit-content;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;height:450px;background-color:#fff;box-shadow:#63636333 0 2px 8px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid blue;transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block;border-radius:4px}.product-item__name[_ngcontent-%COMP%]{font-size:24px;color:#00f;border:none}.product-item__price[_ngcontent-%COMP%]{color:orange;font-size:32px;font-weight:700;border:none}.product-item__price-deion[_ngcontent-%COMP%]{color:gray;font-size:12px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:#00f;border:none;color:#fff;font-size:20px;padding:6px 12px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}"]}),o})()},{path:":id",component:m}];let f=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz.forChild(O),s.Bz]}),o})(),h=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,f,i.u5]}),o})()}}]);