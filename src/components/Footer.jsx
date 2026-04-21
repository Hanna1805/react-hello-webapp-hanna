import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export const Footer = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      fullName: "Mike Anamendolla",
      email: "mike.ana@example.com",
      phone: "(870) 288-4149",
      address: "5842 Hillcrest Rd"
    }
  ]);

 const [view, setView] = useState('list');

 const [newContact, setNewContact] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleAddContact = (e) => {
    e.preventDefault();
    setContacts([...contacts, { ...newContact, id: Date.now() }]);
    setNewContact({ fullName: '', email: '', phone: '', address: '' });
    setView('list');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '800px' }}>
      
      {view === 'list' ? (
        /* --- VISTA DE LISTA --- */
        <div className="card">
          <div className="card-header d-flex justify-content-end bg-white border-0">
            <button className="btn btn-success" onClick={() => setView('form')}>
              Add new contact
            </button>
          </div>
          <ul className="list-group list-group-flush">
            {contacts.map((contact) => (
              <li key={contact.id} className="list-group-item d-flex align-items-center p-3">
                <img 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAACUCAMAAADBJsndAAAAMFBMVEXl5uivtLirsLTo6euttLq2u77Y2t3Gys3S1di+wsXMz9LBxcjd4OK7v8Lh4+WzuLth7RNQAAAD8ElEQVR4nO2c27KrIAxAhSAiIvz/3x7Qnu5etAZig51hvfVtTTDhFtp1jUaj0Wg0Go1Go9Fo/AQQqe1wAIB32kS06y4r67UdhbwTRuP81VwB9DBHSfFA/DUP7lqmelZKbKDEfCFTPcstyVtYp6uYTpuhfIjp0NU3BSfkZ8/IBQbffhjyB0xdURjSuGKwVUUnlGNCDhVFR9ygJ1Q9URjwmsvQV9K0WZZCqSrJBCZPM+EqeHYhW1PN/JaQkUN/sFenOOq4uvmCZhb1c4mlkDOvJyCny1eUZA5ofhKtnqLn9ARTFs4EaxHtizXFyGdZUuL/0HyiA0FTGjZNTxh2wZhJujyLUkC5NLF7jT1ProGHsrnozsQ18KRwxg+USdMTPQPTMpQwGa3wVNDSNcgfPFMnHJzTHMOzWv4Zz5GoKXh28tTy2TxfPH9l3PGHXztw5fuPeP5KnafPmzwLJkf1ZFqHwI+s64C0PYo7Y6Z1MjGR+DacxH2c5/J0hadLK4Hv4IZS6SXfdQLp3EZxHtKH8qXyyPZ50jKe93KmWJP1nDb7Ku4/SjLfdZUe2fGGM6X8dkPIEYyHtDfRooBO3JoddAXx5FopPYnmF3vuy6MbmbOnkpV6L+BT29JGNIcqll265Mzpu+DPof9ARhWtqJmSHnk2opjOQPbBTaCMi849jDzoW0sTF/s09A4ctwxMF+gDTB+p6fcGP8ZSznwXmgdE07CzLJG9uUQwbwCYMYg1qndhKcKor9ZODZ0zU//QRy3mwbirWS5A6vk2dohYo313pQF/BF6pLfROkvJaG2PtGk8bI+qc7y5km77MYezD+2FOCGGerPaVZZcYmmFJnt0avz5NsOltQqXVJ2i7JPjRbLTIij6mf4VnFKCHgkO7SXPWgPhB2oCK40Zg2aIaJ8k5yLKuyrSsV/3AYmpJh7Qr45cnqvhVCuqlTEKlRdTXTMGfY7mYivFLm3kAW/pR7ph+53WKCWfF8m4qT88o8ORL4i1kf+7ggzkhyTdQ557g+en4KVSpqQxnhRRcX1zWjz3jvuqc4zFaky/K9ZSzEnL3AoKZnPdAaUVGo3qq6Pi1DHryFIFW8yeGQV+hpD294w+PCsULk9JLt0L6wgva7xekJ5QqvEnWrJrLCX7JyHtmTZE6XApEeSrSC9nnzmAqWBY8+nE1LPNHHsYq4VQq85GKq/FxivzX0uQW5HIy5k/mCv+Eyrmt/cqmDQu+D4vciEoB/4Uyrz/eQHtWtUR3Z0DVYRfod2k8W6IPYBeiFYvnAnKvROuWPQHcJA/c6+N3T1Sppz83IIP7u4nK1TMSUInEt2ffBTV19rI6KM+362l+MJqNRiOXf1+2MwQQr7iBAAAAAElFTkSuQmCC" 
                  alt="profile" 
                  className="rounded-circle me-4"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <div className="flex-grow-1">
                  <h5 className="mb-1">{contact.fullName}</h5>
                  <p className="mb-1 text-muted small"><i className="bi bi-geo-alt-fill"></i> {contact.address}</p>
                  <p className="mb-1 text-muted small"><i className="bi bi-telephone-fill"></i> {contact.phone}</p>
                  <p className="mb-0 text-muted small"><i className="bi bi-envelope-fill"></i> {contact.email}</p>
                </div>
                <div>
                  <button className="btn btn-sm text-secondary"><i className="bi bi-pencil-fill"></i></button>
                  <button className="btn btn-sm text-secondary"><i className="bi bi-trash-fill"></i></button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        /* --- VISTA DE FORMULARIO (Basada en tu segunda imagen) --- */
        <div className="text-center">
          <h2>Add a new contact</h2>
          <form onSubmit={handleAddContact} className="text-start mt-4">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Full Name"
                value={newContact.fullName}
                onChange={(e) => setNewContact({...newContact, fullName: e.target.value})}
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                placeholder="Enter email"
                value={newContact.email}
                onChange={(e) => setNewContact({...newContact, email: e.target.value})}
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Enter phone"
                value={newContact.phone}
                onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Enter address"
                value={newContact.address}
                onChange={(e) => setNewContact({...newContact, address: e.target.value})}
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-2">save</button>
            <a href="#" onClick={() => setView('list')} className="d-block">or get back to contacts</a>
          </form>
        </div>
      )}
    </div>
  );
};

export default Footer;