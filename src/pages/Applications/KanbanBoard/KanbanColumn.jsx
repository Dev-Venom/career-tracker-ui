import "./KanbanColumn.css";
import KanbanCard from "./KanbanCard";

import { Droppable } from "@hello-pangea/dnd";

function KanbanColumn({ title, status, applications }) {
  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <section
          className="kanban-column"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2
            className={`kanban-column__title kanban-column__title--${status.toLowerCase()}`}
          >
            {title}
          </h2>

          <p className="kanban-column__count">
            {applications.length} Applications
          </p>

          {applications.length === 0 ? (
            <p className="kanban-column__empty">No applications yet</p>
          ) : (
            applications.map((application, index) => (
              <KanbanCard
                key={application.id}
                application={application}
                index={index}
              />
            ))
          )}

          {provided.placeholder}
        </section>
      )}
    </Droppable>
  );
}

export default KanbanColumn;
