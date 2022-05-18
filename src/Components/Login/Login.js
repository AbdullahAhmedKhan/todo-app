import React from 'react';

const Login = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                   
                    <div class="p-12 card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form>
                                <h2 className='text-2xl'>Sign In</h2>
                                <div class="form-control mt-6">
                                    <button type='submit' class="btn btn-primary">Sign In With Google</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;