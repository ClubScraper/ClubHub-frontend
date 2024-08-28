import React, { useEffect, useState } from 'react'
import { supabase } from '../client';
import Navbar from '../components/Navbar';
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
  {Name: 'Networking/Orientation', Id:'Networking/Orientation', Color: '#dc2626'}
];

const output = [];

const Calendar = () => {
  
  registerLicense(process.env.REACT_APP_SYNC_API_KEY)

  const [fetchError, setFetchError] = useState(null)
  const [test, setTest] = useState([])
  const [clubs, setClubs] = useState([])

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

    const fetchClub = async () => {
      const { data, error } = await supabase
      .from('club_accounts')
      .select('club_name')
      if (error) {
        setFetchError("Could not fetch data.")
        setClubs(null)
        console.log(error)
      }
      if (data) {
        setClubs(data)
        setFetchError(null)
      }
    }

    fetchTest()
    fetchClub()

  }, [])







  return (
    <>

    <div>
      <Navbar />
    </div>

   <section id="top">
   <div className="content">
   <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-200 sm:text-7xl">
        <span className="relative whitespace-nowrap">
            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-main" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
            <span className="relative">Events: CMS</span>
        </span>   
    </h1>
    </div>
    </section>
  

    <div className='text-xl font-semibold flex items-center justify-center mt-10'>
      <p>
        On this page, you will find any new events posted by clubs on our Club Calendar with their relevant dates and descriptions.
      </p>
    </div>

    <div className='flex items-center justify-center h-screen mt-10'>
    <ScheduleComponent
    eventSettings={{
      dataSource: test,
    }}
    width={1000}
    height={800}
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

    <div className="mt-5 p-4 bg-white border-black rounded-xl mx-auto w-1/2 flex items-center justify-center text-center">

      <p className='flex space-x-6'>

        <p className='text-black text-2xl'>

          <p className='mb-2 font-bold'>
            Legend
          </p>


          <p className='text-hiring'>
            Hiring
          </p>

          <p className='text-competition'>
            Competition
          </p>

          <p className='text-workshop'>
            Workshop/Review Seminar
          </p>

          <p className='text-network'>
            Networking/Orientation
          </p>
        </p>
      </p>
    </div>


    <div class="mt-10 p-4 mx-auto w-full">
    <details class="mb-2 w-full">
        <summary class="text-2xl bg-gray-100 p-4 rounded-lg cursor-pointer shadow-md mb-4 w-full">
    
            <span class="font-semibold text-black">Our Clubs! (Instagram Handles)</span>
        </summary>
        <div class="shadow-2xl bg-white w-full h-96 max-h-screen overflow-auto mx-auto my-8 p-6 rounded-lg flex items-start justify-left">
        <div className="bg-white w-full">
        {clubs.map((club, index) => (
          <p key={index} className='text-black text-2xl font-semibold'>
            {club.club_name}
          </p>
        ))}

</div>
        </div>
    </details>
</div>


    <div className='mt-10 flex items-center justify-center scale-150'>
        <img src="assets/images/logo.png" alt="Logo" className="logo" />
    </div>


    <div className='mt-5 flex items-center justify-center'>
      <a href="#top" className='hover:underline font-bold text-xl text-white'>
        Back to Top
      </a>
    </div>


      </>
  );
}

export default Calendar;