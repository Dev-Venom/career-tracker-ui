import "./KanbanCard.css";

import { Draggable } from "@hello-pangea/dnd";

function KanbanCard({ application, index }) {
  return (
    <Draggable draggableId={application.id.toString()} index={index}>
      {(provided) => (
       <div
  className="kanban-card"
  ref={provided.innerRef}
  {...provided.draggableProps}
  {...provided.dragHandleProps}
>

  <div className="kanban-card__header">

    <div className="kanban-card__avatar">
      {application.companyName.charAt(0)}
    </div>

    <div>

      <h3>{application.companyName}</h3>

      <p className="kanban-card__role">
        {application.jobTitle}
      </p>

    </div>

  </div>

  <p className="kanban-card__location">
    📍 {application.location}
  </p>

  <span className="kanban-card__date">
    Applied: {application.appliedDate}
  </span>

</div>
      )}
    </Draggable>
  );
}

export default KanbanCard;
