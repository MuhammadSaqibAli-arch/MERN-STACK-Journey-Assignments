const role_input = prompt(`Enter your Role`);
switch(role_input){
    case 'admin':
        alert(`Full System Access`)
    break;
    case 'manager':
        alert(`Team management Access`)
    break;
    case 'developer':
        alert(`Code Access`)
    break;
    case 'intern':
        alert(`Limited Access`)
    break;
    default:
        alert(`Invalid User`)
    break;                    
}


const payment_input = prompt(`“Choose payment method (credit / debit / upi / cod)”`);
switch(payment_input){
    case 'credit':
        alert(`you get 20% OFF`)
        break;
    case 'debit':
        alert(`you get 15% OFF`)
        break;    
    case 'upi':
        alert(`you get 10% OFF`)
        break;    
    case 'cod':
        alert(`you can't get discount`)
        break;
    default:
        alert(`Invalid Payment Option`)    
        break;
}

const order_input = prompt(`“Enter order status (placed / packed / shipped / delivered / cancelled)”`);
switch(order_input){
    case 'placed':
        alert(`"Your order has been placed successfully."`)
        break;
    case 'packed':
        alert(`"Your order has been packed and is ready for shipping."`)
        break;
    case 'shipped':
        alert(`"Your order has been shipped and is on the way."`)
        break;
    case 'deliverd':
        alert(`"Your order has been delivered successfully."`)
        break;
    case 'cancelled':
        alert(`"Your order has been cancelled."`)
        break;
    default:
        alert(`Invalid Order Status`)
        break;                    
}

const day_input = prompt(`Enter Day Monday-Sunday`);
switch(day_input){
    case 'monday':
        alert(`Working Day`);
        break;
    case 'tuesday':
        alert(`Working Day`);
        break;    
    case 'wednesday':
        alert(`Working Day`);
        break;    
    case 'thursday':
        alert(`Working Day`);
        break;    
    case 'friday':
        alert(`Half Day`);
        break;    
    case 'saturday':
        alert(`Working Day`);
        break;    
    case 'sunday':
        alert(`HoliDay`);
        break;    
    default:
        alert(`Invalid day`);
        break;    
}