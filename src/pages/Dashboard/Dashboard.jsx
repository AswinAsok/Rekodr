import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.dashboard}>
                <p className={styles.appheading}>Rekodr</p>

                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Search for a user"
                        className={styles.searchInput}
                    />
                    <button className={styles.searchButton}>Search</button>
                </div>

                <div className={styles.converstationBoxes}>
                    <div className={styles.converstationBox}>
                        <p className={styles.converstationText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim
                            convallis aenean et. Feugiat nibh sed pulvinar proin gravida hendrerit
                            lectus. Elementum nisi quis eleifend quam. Consectetur lorem donec massa
                            sapien faucibus et. Tincidunt lobortis feugiat vivamus at augue eget
                            arcu dictum varius. Dui faucibus in ornare quam viverra orci sagittis eu
                            volutpat. In nibh mauris cursus mattis molestie a. Libero nunc consequat
                            interdum varius sit amet mattis vulputate enim. Velit laoreet id donec
                            ultrices. Varius quam quisque id
                        </p>
                        <button className={styles.readMoreButton}>Read More</button>
                    </div>
                    <div className={styles.converstationBox}>
                        <p className={styles.converstationText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim
                            convallis aenean et. Feugiat nibh sed pulvinar proin gravida hendrerit
                            lectus. Elementum nisi quis eleifend quam. Consectetur lorem donec massa
                            sapien faucibus et. Tincidunt lobortis feugiat vivamus at augue eget
                            arcu dictum varius. Dui faucibus in ornare quam viverra orci sagittis eu
                            volutpat. In nibh mauris cursus mattis molestie a. Libero nunc consequat
                            interdum varius sit amet mattis vulputate enim. Velit laoreet id donec
                            ultrices. Varius quam quisque id
                        </p>
                        <button className={styles.readMoreButton}>Read More</button>
                    </div>
                    <div className={styles.converstationBox}>
                        <p className={styles.converstationText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim
                            convallis aenean et. Feugiat nibh sed pulvinar proin gravida hendrerit
                            lectus. Elementum nisi quis eleifend quam. Consectetur lorem donec massa
                            sapien faucibus et. Tincidunt lobortis feugiat vivamus at augue eget
                            arcu dictum varius. Dui faucibus in ornare quam viverra orci sagittis eu
                            volutpat. In nibh mauris cursus mattis molestie a. Libero nunc consequat
                            interdum varius sit amet mattis vulputate enim. Velit laoreet id donec
                            ultrices. Varius quam quisque id
                        </p>
                        <button className={styles.readMoreButton}>Read More</button>
                    </div>
                    <div className={styles.converstationBox}>
                        <p className={styles.converstationText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim
                            convallis aenean et. Feugiat nibh sed pulvinar proin gravida hendrerit
                            lectus. Elementum nisi quis eleifend quam. Consectetur lorem donec massa
                            sapien faucibus et. Tincidunt lobortis feugiat vivamus at augue eget
                            arcu dictum varius. Dui faucibus in ornare quam viverra orci sagittis eu
                            volutpat. In nibh mauris cursus mattis molestie a. Libero nunc consequat
                            interdum varius sit amet mattis vulputate enim. Velit laoreet id donec
                            ultrices. Varius quam quisque id
                        </p>
                        <button className={styles.readMoreButton}>Read More</button>
                    </div>
                    <div className={styles.converstationBox}>
                        <p className={styles.converstationText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim
                            convallis aenean et. Feugiat nibh sed pulvinar proin gravida hendrerit
                            lectus. Elementum nisi quis eleifend quam. Consectetur lorem donec massa
                            sapien faucibus et. Tincidunt lobortis feugiat vivamus at augue eget
                            arcu dictum varius. Dui faucibus in ornare quam viverra orci sagittis eu
                            volutpat. In nibh mauris cursus mattis molestie a. Libero nunc consequat
                            interdum varius sit amet mattis vulputate enim. Velit laoreet id donec
                            ultrices. Varius quam quisque id
                        </p>
                        <button className={styles.readMoreButton}>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
