import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <h1 className='text-2xl text-center font-semibold text-primary'>Welcome to my Portfolio</h1>
            <h4 className='text-lg text-center font-semibold mt-5'><span className='text-secondary'>My Name:</span> Sadman Prottay</h4>
            <h4 className='text-lg text-center font-semibold'><span className='text-secondary'>My Email:</span> sadmanalam142@gmail.com</h4>
            <h1 className='text-xl text-center font-semibold text-primary my-10'>List Of Technologies I have experienced</h1>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Technologies</th>
                                <th>Level</th>
                                <th>Check Some Of My Projects</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>HTML5</td>
                                <td>Intermediate</td>
                                <td><a target="_blank" href="https://fruits-warehouse-83425.web.app/">Fruits-Warehouse</a></td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>CSS3</td>
                                <td>Intermediate</td>
                                <td><a target="_blank" href="https://amazing-maamoul-23c287.netlify.app/">Sports-Photographer</a></td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Bootstrap</td>
                                <td>Intermediate</td>
                                <td><a target="_blank" href="https://harmonious-cendol-f196f5.netlify.app/">Value-Laptop</a></td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>Tailwind</td>
                                <td>Intermediate</td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>JavaScript</td>
                                <td>Intermediate</td>
                            </tr>
                            <tr>
                                <th>6</th>
                                <td>ReactJS</td>
                                <td>Intermediate</td>
                            </tr>
                            <tr>
                                <th>7</th>
                                <td>MongoDb</td>
                                <td>Intermediate</td>
                            </tr>
                            <tr>
                                <th>8</th>
                                <td>ExpressJs</td>
                                <td>Intermediate</td>
                            </tr>
                            <tr>
                                <th>9</th>
                                <td>NodeJs</td>
                                <td>Intermediate</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;