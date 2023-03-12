import Card from "react-bootstrap/Card"

function MiCard({ imagen, titulo, descripcion }) {
    return (
        <Card>
            <Card.Img src={imagen} />
            <Card.Body>
                <Card.Title>{titulo} </Card.Title>
                <Card.Text>{descripcion} </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default MiCard