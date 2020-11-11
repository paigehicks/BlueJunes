export default () =>`
<section class="store">
<div class="store-body">
<div class="container content-section">
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
</div>

<section class="container content-section">
    <h2 class="section-header">CART
    <img class="cart" src="https://github.com/paigehicks/capstoneProject/blob/master/Pictures/cart.png?raw=true"></h2>
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
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" class="paypal-btn" alt="PayPal - The safer, easier way to pay online!">
    </form>
    </div>
</section>
</div>
</section>
`;
