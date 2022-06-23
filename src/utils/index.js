/**
 * @ func 实现小于一万直接显示，大于一万保留两位小数
 * @ prames {num}
 * 
 */

export const NumberFormat = (number) => {
    if (number < 10000) {
        return number;
    } else {
        if (Math.round((number % 10000) / 1000) == 0) {
            return Math.round(number / 10000) + '万';
        } else {
            return (number / 10000).toFixed(1) + '万';
        }
    }
}

export default NumberFormat
