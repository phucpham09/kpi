import { Container, Row, Col, Button, Form, Alert, Modal, Dropdown } from 'react-bootstrap';
import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './start.css'
import CustomButton from '../../components/CustomButton';
export const Start = () => {
    const navigate = useNavigate();
    const handleButtonPress = () => {
        navigate('/login');
    };
    return (
            <div className="container">
              <div className="hero">
                <img
                  src={require('../../../assets/img/landingPage.png')}
                  className="heroImage"
                  alt="Hero"
                />
              </div>
              <div className="content">
                <div className="contentHeader">
                  <h1 className="title">
                    Làm việc hiệu quả hơn <br /> cùng{' '}
                    <span className="appName">
                      <span className="appNameText">EduKpi</span>
                    </span>
                  </h1>
                  <p className="text">
                    Chúng tôi tự tin mang lại cho bạn hiệu suất làm việc vượt trội
                  </p>
                </div>
        
                <CustomButton
                  title="Bắt đầu ngay"
                  handlePress={handleButtonPress }
                  containerStyles="w-full mt-7"
                />
              </div>
            </div>
          );
};
