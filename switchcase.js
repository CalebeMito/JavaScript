let pp = 200
let tipopag = 4
let pgf = '!'
let cartao = 2

switch (tipopag)
{
  case 1 ://pagamento em dinheiro
    pp = pp - (pp * 10 / 100)
    console.log('Preco final R$ ',pp)
  break;
  
  case 2 ://pagamento em cheque
    pp = pp - (pp * (5/100))
    console.log('Preco final R$ ',pp)
  break;
  
  case 3 ://pagamento em outro
    console.log('o pagamento e invalido')
  break;
  
  case 4://cartao
    console.log('qual tipo de cartao')
  
  if (cartao == 1){
      console.log('voce escolheu o cartao de debito')
  } else {
      console.log('voce escolheu o cartao de credito')
  }
  break;
}
