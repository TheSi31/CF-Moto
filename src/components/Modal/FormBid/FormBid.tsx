import Button from "@/components/UI/Button/Button";

const FormBid = () => {
    return (
        <div>
            <h4>Бронирование онлайн</h4>
            <form>
                <input type="text" placeholder="Как к вам обращаться?" />
                <input type="text" placeholder="Телефон или WhatsApp" />
                <Button text="Забронировать" />
            </form>
        </div>
    );
}

export default FormBid;