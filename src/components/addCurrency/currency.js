export function formatCurrency(param) {  
    return param.toLocaleString('uk-UK', {style: 'currency', currency: 'USD' })
} 