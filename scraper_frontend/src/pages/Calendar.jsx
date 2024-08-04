import React, { useEffect, useState } from 'react'
import { supabase } from '../client';
import {
  Day,
  Inject,
  Month,
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Week,
  ResourcesDirective,
  ResourceDirective,
} from "@syncfusion/ej2-react-schedule";
import { registerLicense } from "@syncfusion/ej2-base";
import ClubCard from "../components/ClubCard"

const mapData = (entry) => {
  return entry.map(item => ({
    Id: item.Id,
    Subject: item.account + ": " + item.type,
    Description: item.caption,
    StartTime: new Date(item.relevant_dates),
    EndTime: new Date(item.relevant_dates),
    ResourceID: item.type,
    IsAllDay: true,
  }));
};

const resourceDataSource = [
  {Name: 'Hiring', Id: 'Hiring', Color: '#ea7a57'},
  {Name: 'Competition', Id:'Competition', Color: '#357CD2'},
  {Name: 'Workshop/Review Seminar', Id:'Workshop/Review Seminar', Color: '#7fa900'},
  {Name: 'Networking/Orientation', Id:'Networking/Orientation', Color: '#E6E6E6'}
];

const output = [];

const Calendar = () => {
  
  registerLicense(process.env.REACT_APP_SYNC_API_KEY)

  const [fetchError, setFetchError] = useState(null)
  const [test, setTest] = useState([])
  useEffect (() => {
    const fetchTest = async () =>  {
      const { data, error } = await supabase
      .from('test')
      .select()
      if (error) {
        setFetchError("Could not fetch data.")
        setTest(null)
        console.log(error)
      }
      if (data) {
        const newData = mapData(data);
        setTest(newData)
        setFetchError(null) 
      }
    }

    fetchTest()

  }, [])




  return (
    <>
  
    <div className='flex items-center justify-center h-screen'>
    <ScheduleComponent
    eventSettings={{
      dataSource: test,
    }}
    width={800}
    height={600}
    >
    <ResourcesDirective>
      <ResourceDirective field='ResourceID'
      title='Resource Name' name='Resources'
      textField='Name' idField='Id' colorField='Color'
      dataSource={ resourceDataSource } >
      </ResourceDirective>
    </ResourcesDirective>
      <ViewsDirective>
        <ViewDirective option="Month" />
      </ViewsDirective>

      <Inject services={[Day, Week, Month]} />
    </ScheduleComponent>
    </div>
      </>
  );
}

export default Calendar;