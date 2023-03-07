export default function InfoComponent({ info }) {

    return (
        <div className="whitespace-pre-line">
            { info.getText() }
        </div>
    )
}