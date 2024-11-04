// src/components/ToastEditor.js
import React, { useEffect, useRef } from 'react';
import { Editor } from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css'; // CSS import
import { uploadFile } from '../../api/file'; // 파일 업로드 API (필요에 따라 수정)

const Toast = ({ onChange, initialValue }) => {
  const editorRef = useRef(null);
  const editorInstanceRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      editorInstanceRef.current = new Editor({
        el: editorRef.current,
        height: '300px',
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        initialValue: initialValue || '', // 초기 콘텐츠 설정
        events: {
          change: () => {
            const content = editorInstanceRef.current.getMarkdown();
            // 변경된 내용을 부모 컴포넌트로 전달
            onChange(content);
          },
        },
        hooks: {
          addImageBlobHook: (blob, callback) => {
            // Blob 또는 File 타입인 경우
            if (blob instanceof Blob || blob instanceof File) {
              const formData = new FormData();
              formData.append('file', blob);

              // 파일 업로드 시작
              uploadFile(formData)
                .then(response => {
                  if (response.status !== 200) {
                    throw new Error('파일 업로드 실패');
                  }
                  return response.data; // 서버에서 반환된 URL
                })
                .then(imageUrl => {
                  // 에디터에 마크다운 형식으로 이미지 삽입
                  callback(imageUrl, '이미지 설명'); // 에디터에 이미지 삽입
                })
                .catch(error => {
                  console.error('이미지 업로드 중 오류 발생:', error);
                });
            } else {
              console.error('업로드된 파일이 Blob 또는 File 타입이 아닙니다:', blob);
            }
          },
        },
      });

      return () => {
        if (editorInstanceRef.current) {
          editorInstanceRef.current.destroy(); // 에디터 인스턴스 제거
        }
      };
    }
  }, []);

  // contents prop이 변경될 때마다 에디터에 새로운 내용을 설정
  useEffect(() => {
    if (editorInstanceRef.current && initialValue !== undefined) {
      editorInstanceRef.current.setMarkdown(initialValue);
    }
  }, [initialValue]);

  return <div ref={editorRef} style={{ border: '1px solid #ccc', borderRadius: '4px' }} />;
};

export default Toast;
