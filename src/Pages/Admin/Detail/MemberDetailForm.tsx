import MemberDetailInfoItem from '@Page/Admin/Detail/MemberDetailInfoItem';
import MemberDetailInfoSelectItem from '@Page/Admin/Detail/MemberDetailInfoSelectItem';
import MemberDetailInfoSelectItemBirth from '@Page/Admin/Detail/MemberDetailInfoSelectItemBirth';
import React from 'react';
import AdminStyles from '@Style/AdminStyles';

const {
    DetailBodyContentWrapper,
    DetailBodyContentContainer,
    DetailBodyProfileWrapper,
    DetailBodyProfileContainer,
    DetailBodyProfile,
    DetailBodyProfileEditContainer,
    DetailBodyProfileEditLabel,
    DetailBodyProfileEditFile,
    DetailBodyInfoContainer,
    DetailBodyInfoContainer1Col,
} = AdminStyles.ContentSectionMemberDetailStyle;

const MemberDetailForm = () => {
    return (
        <DetailBodyContentWrapper>
            <DetailBodyContentContainer>
                <DetailBodyProfileWrapper>
                    <DetailBodyProfileContainer>
                        <DetailBodyProfile
                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/img_profile_default.png"
                            alt="image description"
                        />
                    </DetailBodyProfileContainer>
                    <DetailBodyProfileEditContainer>
                        <DetailBodyProfileEditLabel>이미지 업로드</DetailBodyProfileEditLabel>
                        <DetailBodyProfileEditFile type="file" />
                    </DetailBodyProfileEditContainer>
                </DetailBodyProfileWrapper>
                <DetailBodyInfoContainer>
                    <MemberDetailInfoItem title="회원 번호" type="number" isReadOnly={true} placeholder="1111" />
                    <MemberDetailInfoItem title="가입경로" type="text" isReadOnly={true} placeholder="Web" />
                    <MemberDetailInfoItem title="종류" type="text" isReadOnly={true} placeholder="카카오톡" />
                    <MemberDetailInfoSelectItem
                        title="레벨"
                        items={[
                            { title: '선택', value: '' },
                            { title: '일반', value: '0001' },
                            { title: '관리자', value: '0002' },
                        ]}
                        isReadOnly={false}
                        placeholder=""
                    />
                </DetailBodyInfoContainer>
                <DetailBodyInfoContainer>
                    <MemberDetailInfoItem title="이메일" type="email" isReadOnly={true} placeholder="xxxx@xxx.com" />
                    <MemberDetailInfoItem title="비밀번호" type="password" isReadOnly={true} placeholder="*************" />
                    <MemberDetailInfoItem title="이름" type="text" isReadOnly={true} placeholder="이름" />
                    <MemberDetailInfoSelectItem
                        title="성별"
                        items={[
                            { title: '선택', value: '' },
                            { title: '남성', value: '0001' },
                            { title: '여성', value: '0002' },
                        ]}
                        isReadOnly={false}
                        placeholder=""
                    />
                </DetailBodyInfoContainer>
                <DetailBodyInfoContainer1Col>
                    <MemberDetailInfoSelectItemBirth TitleString="생년월일" isReadOnly={false} placeholder="" />
                </DetailBodyInfoContainer1Col>
                <DetailBodyInfoContainer>
                    <MemberDetailInfoSelectItem
                        title={'좋아하는 스타일'}
                        items={[
                            { title: '선택', value: '' },
                            { title: '공격', value: '0001' },
                            { title: '벨런스', value: '0002' },
                            { title: '스타일', value: '0003' },
                        ]}
                        isReadOnly={false}
                        placeholder=""
                    />
                    <MemberDetailInfoSelectItem
                        title="자신 있는 능력"
                        items={[
                            { title: '선택', value: '' },
                            { title: '슛', value: '0001' },
                            { title: '패스', value: '0002' },
                            { title: '드리블', value: '0003' },
                            { title: '체력', value: '0004' },
                            { title: '스피드', value: '0005' },
                            { title: '피지컬', value: '0006' },
                            { title: '골키퍼', value: '0007' },
                        ]}
                        isReadOnly={false}
                        placeholder=""
                    />
                </DetailBodyInfoContainer>
                <DetailBodyInfoContainer>
                    <MemberDetailInfoItem title="포인트" type="number" isReadOnly={true} placeholder="12,973" />
                    <MemberDetailInfoItem title="마지막 로그인" type="text" isReadOnly={true} placeholder="2023.12.17 08:00" />
                </DetailBodyInfoContainer>
            </DetailBodyContentContainer>
        </DetailBodyContentWrapper>
    );
};

export default MemberDetailForm;
