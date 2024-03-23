import React, { useState } from 'react'
import Banner from './components/Banner'
import Right from './components/Right';
import { Link } from 'react-router-dom';

const SingleBlog = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
    };
  return (
    <>
    <Banner
      pageTitle="Blog"
      bannerText="Incididunt ut laboret dolore magna aliqua enim minim veniam nostrud ullamco laboris nisi aliquip ex loea."
      breadcrumb="Single Blog"
      showCarsBreadcrumb={false}
    />  
    <section className="mt-4 mb-4 container-xl">
            <div className="row">
                {/* Left Side */}
                <div className="col-lg-9 p-4">
                    {/* Top Image */}
                    <div className="pc-singleBlog-image">
                        <img src={'images/900x600/42.jpg'} className="img-fluid w-100 shadow-sm" alt="single-blog-image" />
                    </div>
                    {/* Top Image */}
                    {/* Title */}
                    <div className="mt-4">
                        <h2>The Blog Title Goes Here</h2>
                        <hr className="w-75 text-red" />
                    </div>
                    {/* Title */}
                    {/* (date posted, number of comments, category) */}
                    <div className="pc-dnc d-flex gap-3">
                        <span className="d-block p-2"><small><i className="fa-solid fa-calendar-days"></i> 12-January-2024</small></span>
                        <span className="d-block p-2"><small><i className="fa-solid fa-comment"></i> 999</small></span>
                        <span className="d-block p-2"><small><i className="fa-solid fa-folder"></i> <Link to='/blog' className="text-white" style={{ textDecoration: 'none' }}>Category Name</Link></small></span>
                    </div>
                    {/* (date posted, number of comments, category) */}
                    {/* Post */}
                    <div className="pc-singleBlog-post mt-4">
                        <p>Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat.</p>
                        <p>Non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore veritatis et quasi architecto beatae vitae dicta.</p>
                        {/* block images */}
                        <div className="row">
                            {/* 1 */}
                            <div className="col-lg-6 p-2">
                                <img src={'images/900x600/7.jpg'} className="img-fluid shadow-sm" alt="blog-image" />
                            </div>
                            {/* 2 */}
                            <div className="col-lg-6 p-2">
                                <img src={'images/900x600/8.jpg'} className="img-fluid shadow-sm" alt="blog-image" />
                            </div>
                            {/* End */}
                        </div>
                        {/* block images */}
                        <p className="mt-4">Aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.</p>
                        <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidat Non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore veritatis et quasi architecto beatae vitae dicta.</p>
                    </div>
                    {/* Post */}
                    {/* Comments */}
                    <div>
                        <h2>Comments (999)</h2>
                        <hr className="w-75 text-red" />
                        {/* comments box */}
                        <div className="pc-singleBlog-comments">
                            {/* Image */}
                            <div className="d-flex justify-content-center"><img style={{ borderRadius: '50%', width: '45%' }} src={'images/person/person10.jpg'} className="img-fluid" alt="comment" /></div>
                            {/* Text */}
                            <div>
                                {/* Head */}
                                <div className="d-flex gap-3">
                                    <span className="d-block"><b>John Doe</b></span>
                                    <span className="d-block">12-January-2024</span>
                                    <span className="d-block"><a href="#" className="text-red">Reply</a></span>
                                </div>
                                {/* Head */}
                                {/* comment */}
                                <div className="mt-3">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolor ab quidem iure? Soluta, accusantium.</p>
                                </div>
                                {/* comment */}
                            </div>
                            {/* End */}
                        </div>
                        {/* comments box */}
                        {/* comments box */}
                        <div className="pc-singleBlog-comments">
                            {/* Image */}
                            <div className="d-flex justify-content-center"><img style={{ borderRadius: '50%', width: '45%' }} src={'images/person/person11.jpg'} className="img-fluid" alt="comment" /></div>
                            {/* Text */}
                            <div>
                                {/* Head */}
                                <div className="d-flex gap-3">
                                    <span className="d-block"><b>John Doe</b></span>
                                    <span className="d-block">12-January-2024</span>
                                    <span className="d-block"><a href="#" className="text-red">Reply</a></span>
                                </div>
                                {/* Head */}
                                {/* comment */}
                                <div className="mt-3">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolor ab quidem iure? Soluta, accusantium.</p>
                                </div>
                                {/* comment */}
                            </div>
                            {/* End */}
                        </div>
                        {/* comments box */}
                        <div className="d-flex justify-content-center"><Link to='/blog' className="text-red">Read More</Link></div>
                    </div>
                    {/* Comments */}
                    {/* Post Comment */}
                    <div className="w-auto mt-4">
                        <h2>Post a Comment</h2>
                        <hr className="w-75 text-red" />
                        <div className="container">
                            {/* Form */}
                            <form onSubmit={handleSubmit}>
                                {/* Name and Email */}
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                {/* Name and Email */}
                                {/* Text Area */}
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Post Your Comment</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                                </div>
                                {/* Text Area */}
                                <input className="pc-contact-submit" type="submit" value="Comment" />
                            </form>
                            {/* Form */}
                        </div>
                    </div>
                    {/* Post Comment */}
                </div>
                {/* Left Side */}
                {/* Right Side */}
                <div className="col-lg-3 p-2 mt-4">
                    <Right/>
                </div>
                {/* Right Side */}
            </div>
        </section>
    </>
  )
}

export default SingleBlog
