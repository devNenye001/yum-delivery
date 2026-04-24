import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineFastfood } from 'react-icons/md';
import { LuPackageCheck } from 'react-icons/lu';
import './OtherSection.css';

const OtherSection = () => {
    const triadData = [
        {
            id: 'pickup',
            icon: <TbTruckDelivery />,
            title: 'Pickup & Delivery',
            desc: 'Get hot, freshly prepared meals delivered straight to your door — fast, safe, and stress-free.'
        },
        {
            id: 'catering',
            icon: <MdOutlineFastfood />,
            title: 'Events Catering',
            desc: 'From intimate gatherings to large celebrations, we bring the celebrations to your special moments.'
        },
        {
            id: 'bulk',
            icon: <LuPackageCheck />,
            title: 'Bulk & Daily Orders',
            desc: 'Perfect for offices, meetings, and families who need consistent, quality meals.'
        }
    ];

    return (
        <section className="yum-action-concourse">
            <div className="concourse-inner-chamber">
                <Motion.div 
                    className="action-banner-monolith"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Primary Call Area */}
                    <div className="monolith-primary-anchor">
                        <h2 className="anchor-title-prose">
                            Fresh Flavours <br />
                            Wherever You Need Them
                        </h2>
                        
                        <Link to="/menu" className="anchor-trigger-node-wrapper">
                            <Motion.div 
                                className="anchor-trigger-node"
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>View Menu</span>
                                <HiOutlineArrowRight />
                            </Motion.div>
                        </Link>
                    </div>

                    {/* Features Triad Area */}
                    <div className="monolith-feature-triad">
                        {triadData.map((item, index) => (
                            <Motion.div 
                                key={item.id}
                                className="triad-feature-cell"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                            >
                                <div className="cell-icon-vessel">{item.icon}</div>
                                <h3 className="cell-label-core">{item.title}</h3>
                                <p className="cell-prose-detail">{item.desc}</p>
                            </Motion.div>
                        ))}
                    </div>
                </Motion.div>
            </div>
        </section>
    );
};

export default OtherSection;