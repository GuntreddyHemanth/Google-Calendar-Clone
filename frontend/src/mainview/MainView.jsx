import Sidebar from '@/sidebar/Sidebar'
import React from 'react'

const MainView = ({ eventsData}) => {
    const { selectedView } = useViewStore();

    const {
      isPopoverOpen,
      closePopover,
      isEventSummaryOpen,
      closeEventSummary,
      selectedEvent,
      setEvents,
    } = useEventStore();
  
    const { userSelectedDate } = useDateStore();
  
    useEffect(() => {
      const mappedEvents = eventsData.map((event) => ({
        id: event.id,
        date: dayjs(event.date),
        title: event.title,
        description: event.description,
      }));
  
      setEvents(mappedEvents);
    }, [eventsData, setEvents]);
  
    return (
      <div className="flex">
        {/* SideBar */}
        <SideBar />
  
        <div className="w-full flex-1">
          {selectedView === "month" && <MonthView />}
          {selectedView === "week" && <WeekView />}
          {selectedView === "day" && <DayView />}
        </div>
        {isPopoverOpen && (
          <EventPopover
            isOpen={isPopoverOpen}
            onClose={closePopover}
            date={userSelectedDate.format("YYYY-MM-DD")}
          />
        )}
  
        {isEventSummaryOpen && selectedEvent && (
          <EventSummaryPopover
            isOpen={isEventSummaryOpen}
            onClose={closeEventSummary}
            event={selectedEvent}
          />
        )}
      </div>
    );
}

export default MainView