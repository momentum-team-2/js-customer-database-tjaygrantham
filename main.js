function createCard(customer){
  const card = `
  <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
  <div class="tc">
    <img src="<%= customer.picture.large %>" class="br-100 h4 w4 dib ba b--black-05 pa2" title="<%= _.capitalize(customer.name.first) %>">
    <h1 class="f4 mb2"><%= _.capitalize(customer.name.first) + ' ' + _.capitalize(customer.name.last) %></h1>
    <h2 class="f7 fw4 gray mt0"><%= customer.email %></h2>
    <header>
      <h2 class="f5 b--black-05 mt0"><%- _.startCase(customer.location.street) %></h2>
      <h2 class="f5 b--black-05 mt0"><%- _.startCase(customer.location.city) + ' ' + nameToAbbr(customer.location.state) + ' ' + customer.location.postcode %></h2>
      <h3 class="f6 b--black-05 mt0"><%- 'DOB: ' + moment(customer.dob, 'YYYY-MM-DD hh:mm:ss').format('MMM DD, YYYY') %></h3>
      <h3 class="f7 b--black-05 mt"><%- 'Customer Since: ' + moment(customer.registered, 'YYYY-MM-DD hh:mm:ss').format('MMM DD, YYYY') %></h3>
    </header>
  </div>
  </article>
  `
  const cardTemplate = _.template(card)
  return cardTemplate({'customer': customer})
}

const container = document.querySelector('.flex-container')
for(let customer of customers){
  container.innerHTML += createCard(customer)
}