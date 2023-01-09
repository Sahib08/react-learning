const Dashboard = ({user}) => {
  return (
    <section className='section'>
      <h4>{user?.name}</h4>
      <h5>{user?.email}</h5>
    </section>
  );
};
export default Dashboard;
