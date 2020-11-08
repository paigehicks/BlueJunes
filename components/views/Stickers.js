export default () =>`
<section class="container content-section">
    <h2 class="section-header">Shop</h2>
    <div class="shop-items">

        <div class="shop-item">
            <span class="shop-item-title">Let Me Sleep</span>
            <img class="shop-item-image" src="https://github.com/paigehicks/capstoneProject/blob/master/Pictures/letMeSleep.png?raw=true">
            <div class="shop-item-details">
                <span class="shop-item-price">$5.00</span>
                <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
            </div>
        </div>

        <div class="shop-item">
            <span class="shop-item-title">Work in Progress</span>
            <img class="shop-item-image" src="https://github.com/paigehicks/capstoneProject/blob/master/Pictures/workInProgress.png?raw=true">
            <div class="shop-item-details">
                <span class="shop-item-price">$5.00</span>
                <button class="btn btn-primary shop-item-button"type="button">ADD TO CART</button>
            </div>
        </div>

        <div class="shop-item">
            <span class="shop-item-title">Atlas Moth</span>
            <img class="shop-item-image" src="https://github.com/paigehicks/capstoneProject/blob/master/Pictures/atlasMoth.png?raw=true">
            <div class="shop-item-details">
                <span class="shop-item-price">$5.00</span>
                <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
            </div>
        </div>
    </div>
</section>

<section class="container content-section">
    <h2 class="section-header">CART</h2>
    <img class="cart" src="https://github.com/paigehicks/capstoneProject/blob/master/Pictures/cart.png?raw=true">
    <div class="cart-row">
        <span class="cart-item cart-header cart-column">ITEM</span>
        <span class="cart-price cart-header cart-column">PRICE</span>
        <span class="cart-quantity cart-header cart-column">QUANTITY</span>
    </div>
    <div class="cart-items">
        <div class="cart-row">
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="https://github.com/paigehicks/capstoneProject/blob/master/Pictures/letMeSleep.png?raw=true" width="100" height="100">
                <span class="cart-item-title">Let Me Sleep</span>
            </div>
            <span class="cart-price cart-column">$5.00</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>
        </div>
        <div class="cart-row">
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="https://github.com/paigehicks/capstoneProject/blob/master/Pictures/atlasMoth.png?raw=true" width="100" height="100">
                <span class="cart-item-title">Atlas Moth</span>
            </div>
            <span class="cart-price cart-column">$5.00</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="2">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>
        </div>
    </div>
    <div class="cart-total">
        <strong class="cart-total-title">Total</strong>
        <span class="cart-total-price">$15.00</span>
    </div>
    <form action="/pay" method="post">
    <input class="btn btn-primary btn-purchase" type="submit" value="Buy">
</section>
`;
