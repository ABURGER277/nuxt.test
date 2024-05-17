export function useFormatDate(inputDate) {
        const date = new Date(inputDate);

        const monthNames = [
        "1월", "2월", "3월", "4월", "5월", "6월",
        "7월", "8월", "9월", "10월", "11월", "12월"
        ];

        const month = monthNames[date.getMonth()];
        const day = date.getDate();
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? '오후' : '오전';

        hours = hours % 12;
        hours = hours ? hours : 12;

        return `${month} ${day}일 ${ampm} ${hours}:${minutes}`;
    
}